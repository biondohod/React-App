import { Component } from 'react';

import './app-info.css';

class AppInfo extends Component {
    render() {
        const {totalCount, increaseCount} = this.props;
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: {totalCount}</h2>
                <h2>Премию получат: {increaseCount}</h2>
            </div>
        );
    }
};

export default AppInfo;