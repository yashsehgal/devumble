import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { getLoggedInStatus_fromLocalStorage } from '../utils/local-storage';

ReactModal.setAppElement('#root');

export default function CompulsoryAuthModal() {
    const [authModalRef, setAuthModal] = useState(true);
    return (
        <React.Fragment>
            <ReactModal
                isOpen={authModalRef}
                onRequestClose={() => {
                    if (getLoggedInStatus_fromLocalStorage()) {
                        setAuthModal(false);
                    }
                }}
                style={{
                    overlay: {
                        background: 'rgba(0, 0, 0, 0.500)',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        filter: 'blur(80%)'
                    },
                    content: {
                        backgroundColor: '#121212',
                        color: 'white',
                        boxShadow: '0px 0px 6px 12px rgba(0, 0, 0, 0.225)',
                        border: 'transparent',
                        height: '640px',
                        width: '640px',
                        borderRadius: '8px',
                        padding: '28px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                }}
            >
                <div className='compulsory-auth-modal-content-wrapper'>
                    You need to login before exploring your date
                </div>
            </ReactModal>
        </React.Fragment>
    )
}