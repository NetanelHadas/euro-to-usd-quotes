import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import columns from './Columns';
import 'antd/dist/antd.css';

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=${resource}`);

        setResources(response.data);
    }

    useEffect(() => {
        fetchResource(resource);
    }, [resource])

    return (
        <div>
            <Table rowKey={resources => resources.date} dataSource={resources} columns={columns} />
        </div>
    );
}

export default ResourceList;