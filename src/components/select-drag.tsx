import React, { useEffect, useState, useRef } from 'react';
import { isNonNullChain } from 'typescript';

type Props = {
    enabled: boolean;
    SelectionItem: (value: any, date: any) => Promise<any>;
    date: string;
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
export const SelectDrag: React.FC<Props> = ({ SelectionItem, enabled, date, ...children }) => {
    const [mouseDown, setmouseDown] = useState<boolean>(false);
    const [startPoint, setstartPoint] = useState<Point | null>(null);
    const [endPoint, setendPoint] = useState<Point | null>(null);
    const [selectionBox, setselectionBox] = useState<selectionBox | null>(null);
    const [appendMode, setappendMode] = useState<boolean>(false);
    const [selectedChildren, setselectedChildren] = useState({});
    const selectionBoxRef = useRef<any>();

    // useEffect(() => {
    //     if (mouseDown && selectionBox != null) {
    //         updateCollidingChildren(selectionBox);
    //     }
    // }, [selectionBox]);

    // useEffect(() => {
    //     clearSelection();
    // }, [enabled]);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.button === 2 || e.nativeEvent.which === 2) {
            return;
        }
        setmouseDown(true);
        setstartPoint({ x: e.pageX, y: e.pageY });
    };

    // const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     console.log("onMouseUp");
    //     setmouseDown(false);
    //     setstartPoint(null);
    //     setendPoint(null);
    //     setselectionBox(null);
    //     setappendMode(false);
    //     let value = _.keys(selectedChildren);
    //     SelectionItem(value, date);
    // };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        if (mouseDown) {
            setendPoint({ x: e.pageX, y: e.pageY });
            setselectionBox(calculateSelectionBox(startPoint, endPoint));
        }
    };

    // const clearSelection = () => {
    //     setselectedChildren({});
    //     SelectionItem(null, null);
    // };

    // const renderChildren = () => {
    //     var index = 0;
    //     return React.Children.map(children, key => {
    //         const tmpKey = index++;
    //         const isSelected = .has(selectedChildren, tmpKey);
    //         return (
    //         <div className={
    //             'select-box ' + (
    //                 isSelected ? 'selected' : ''
    //             )}></div>);
    //     });
    // };

    // const boxIntersects = (boxA, boxB) => {
    //     if (boxA.left <= boxB.left + boxB.width && boxA.left + boxA.width >= boxB.left && boxA.top <= boxB.top + boxB.height && boxA.top + boxA.height >= boxB.top) {
    //         return true;
    //     }
    //     return false;
    // };

    // const updateCollidingChildren = (selectionBox) => {
    //     var tmpBox = null;
    //     each(selectionBoxRef.current.children, function (children, key) {
    //         if (key !== 'selectionBox') {
    //             tmpBox = {
    //                 top: children.offsetTop,
    //                 left: children.offsetLeft,
    //                 width: children.clientWidth,
    //                 height: children.clientHeight
    //             };
    //             if (boxIntersects(selectionBox, tmpBox)) {
    //                 selectedChildren[key] = true;
    //             } else {
    //                 if (!appendMode) {
    //                     delete selectedChildren[key];
    //                 }
    //             }
    //         }
    //     });
    // };

    const calculateSelectionBox = (startPoint: Point | null, endPoint: Point | null) => {
        if (!mouseDown || endPoint == null || startPoint == null) {
            return null;
        }
        var parentNode = selectionBoxRef.current;
        var left = Math.min(startPoint.x, endPoint.x) - parentNode.offsetLeft;
        var top = Math.min(startPoint.y, endPoint.y) - parentNode.offsetTop;
        var width = Math.abs(startPoint.x - endPoint.x);
        var height = Math.abs(startPoint.y - endPoint.y);
        return { left: left, top: top, width: width, height: height };
    };

    var className = 'selection ' + (
        mouseDown ? 'dragging' : ''
    );

    return (
        <div className={className}
            ref={selectionBoxRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            // onMouseUp={onMouseUp}
            >
            {/* {renderChildren()} */}
        </div>
    );
};
