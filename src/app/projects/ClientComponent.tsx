// components/DraggableBox.tsx
'use client'

import React, { useRef } from 'react';
import Draggable from 'react-draggable';

const DraggableBox: React.FC = () => {
    const nodeRef = useRef<HTMLDivElement>(null); // 👈 Important

    return (
        <div style={{ height: '10vh', padding: '2rem' }}>
            <Draggable nodeRef={nodeRef}>
                <div
                    ref={nodeRef}
                    style={{
                        width: 200,
                        height: 100,
                        backgroundColor: 'lightblue',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'move',
                        borderRadius: 8,
                    }}
                >
                    Drag Me!
                </div>
            </Draggable>
        </div>
    );
};

export default DraggableBox;
