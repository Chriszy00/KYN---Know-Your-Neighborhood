import React from 'react';
import { Spin } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoadingIndicator(props) {
return (
<div className="d-flex justify-content-center mt-5">
<Spin size="large" />
</div>
);
}