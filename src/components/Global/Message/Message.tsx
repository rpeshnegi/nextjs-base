import Toast from 'react-bootstrap/Toast';
import React, { useEffect } from "react";
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { handleMessage } from "../../../store/actions/global";

function Message() {
    const { global } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (global?.message) {
            setTimeout(() => {
                dispatch(handleMessage({ message: '' }));
            }, 3000)
        }
    }, [dispatch, global]);
    return (
        <>
            <ToastContainer className="p-3" position="bottom-end">
                <Toast bg={global?.type}
                    onClose={() => dispatch(handleMessage({ message: '' }))}
                    show={!!global?.message}
                    delay={3000}
                    autohide
                >
                    <Toast.Header closeButton>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">
                            {global?.heading
                                ? global?.heading
                                : global?.type === "success"
                                    ? "Success"
                                    : "Error!"}
                        </strong>
                    </Toast.Header>
                    <Toast.Body>{global?.message}</Toast.Body>
                </Toast>
            </ToastContainer>
            <style jsx global>{`
                .toast-container {
                    z-index: 1;
                    bottom: 115px !important;
                    position: fixed !important;
                }
            `}</style>
        </>
    );
}

export default Message;
