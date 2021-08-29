import React from 'react';
import { WaveTopBottomLoading } from 'react-loadingg'

import Modal from '@material-ui/core/Modal'
const Loading = () => {
    return <Modal open={true}>
        <WaveTopBottomLoading />
    </Modal>
};

export default Loading;