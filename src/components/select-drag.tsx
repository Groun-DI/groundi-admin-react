import React, { useEffect, useState, useRef, useCallback } from 'react';
import * as _ from 'lodash';
import styled from 'styled-components';
import { theme } from 'styles/theme';

type Props = {
    enabled: boolean;
    onSelectionChange: (value: any, date: any) => void;
    date: string;
    children: React.ReactNode;
}

type selectionBox = {
    left: number,
    top: number,
    width: number,
    height: number
}
type Point = {
    x: number,
    y: number
}

export const SelectDrag: React.FC<Props> = ({ onSelectionChange, enabled, date, children }) => {
    const [mouseDown, setmouseDown] = useState<boolean>(false);
    const [startPoint, setstartPoint] = useState<Point | null>(null);
    const [endPoint, setendPoint] = useState<Point | null>(null);
    const [selectionBox, setselectionBox] = useState<selectionBox | null>(null);
    const [appendMode, setappendMode] = useState<boolean>(false);
    const [selectedChildren, setselectedChildren] = useState<any>({});
    const selectionBoxRef = useRef<any>();

    const _onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.button === 2 || e.nativeEvent.which === 2) {
            return;
        }
        setmouseDown(true);
        setstartPoint({ x: e.pageX, y: e.pageY });
    };

    const _onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setmouseDown(false);
        setstartPoint(null);
        setendPoint(null);
        setselectionBox(null);
        setappendMode(false);
        let value = _.keys(selectedChildren);
        onSelectionChange(value, date);
    };

    const _onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        if (mouseDown) {
            setendPoint({ x: e.pageX, y: e.pageY });
            setselectionBox(_calculateSelectionBox(startPoint, endPoint));
        }
    };

    const clearSelection = useCallback(() => {
        setselectedChildren({});
        onSelectionChange(null, null);
    }, [onSelectionChange]);

    const renderChildren = () => {
        var index = 0;
        return React.Children.map(children, (child: any) => {
            if (child !== undefined && child != null) {
                const tmpKey = child.key != null ? index++ : child['key'];
                const isSelected = _.has(selectedChildren, tmpKey);
                return (<BoxByTime isSelected={isSelected}></BoxByTime>);
            }
        });
    };

    const _boxIntersects = (boxA: selectionBox, boxB: selectionBox) => {
        if (boxA.left <= boxB.left + boxB.width && boxA.left + boxA.width >= boxB.left && boxA.top <= boxB.top + boxB.height && boxA.top + boxA.height >= boxB.top) {
            return true;
        }
        return false;
    };

    const _updateCollidingChildren = useCallback((selectionBox) => {
        var tmpBox = null;
        _.each(selectionBoxRef.current.children, function (children, key) {
            if (key !== 'selectionBox') {
                tmpBox = {
                    top: children.offsetTop,
                    left: children.offsetLeft,
                    width: children.clientWidth,
                    height: children.clientHeight
                };
                if (_boxIntersects(selectionBox, tmpBox)) {
                    selectedChildren[key] = true;
                    console.log(selectedChildren);
                } else {
                    if (!appendMode) {
                        delete selectedChildren[key];
                    }
                }
            }
        });
    }, [appendMode, selectedChildren]);

    const _calculateSelectionBox = (startPoint: Point | null, endPoint: Point | null) => {
        if (!mouseDown || _.isNull(endPoint) || _.isNull(startPoint)) {
            return null;
        }
        var parentNode = selectionBoxRef.current;
        var left = Math.min(startPoint.x, endPoint.x) - parentNode.offsetLeft;
        var top = Math.min(startPoint.y, endPoint.y) - parentNode.offsetTop;
        var width = Math.abs(startPoint.x - endPoint.x);
        var height = Math.abs(startPoint.y - endPoint.y);
        return { left: left, top: top, width: width, height: height };
    };

    useEffect(() => {
        if (mouseDown && !_.isNull(selectionBox)) {
            _updateCollidingChildren(selectionBox);
        }
    }, [_updateCollidingChildren, mouseDown, selectionBox]);

    useEffect(() => {
        clearSelection();
    }, [clearSelection, enabled]);

    return (
        <Container
            ref={selectionBoxRef}
            onMouseDown={_onMouseDown}
            onMouseMove={_onMouseMove}
            onMouseUp={_onMouseUp}>
            {
                renderChildren()
            }
        </Container>
    );
};

const Container = styled.td`
    position: relative;
`


const BoxByTime = styled.div<{ isSelected: boolean }>`
    height: 40px;
    border-top: 1px solid ${theme.color.border};
    border-right: 1px solid ${theme.color.border};
    border-bottom: 1px solid ${theme.color.border};
    border-left: 1px solid ${theme.color.border};
    background:${({ isSelected }) => isSelected ? theme.color.main_light : "#fff"};
`