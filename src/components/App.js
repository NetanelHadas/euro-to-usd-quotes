import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    const [resource, setResource] = useState('MIN_1');
    return ( 
        <div>
            <div>
                <button onClick={() => setResource('MIN_1')}>1 minute</button>
                <button onClick={() => setResource('MIN_5')}>5 minutes</button>
                <button onClick={() => setResource('HOUR_1')}>1 hour</button>
                <button onClick={() => setResource('WEEK_1')}>1 week</button>
            </div>
            <ResourceList resource={ resource }/>
        </div>
    );
}

export default App;