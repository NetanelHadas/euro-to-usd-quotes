import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    const [resource, setResource] = useState('1 minute');
    return ( 
        <div>
            <div>
                <button onClick={() => setResource('1 minute')}>1 minute</button>
                <button onClick={() => setResource('5 minutes')}>5 minutes</button>
                <button onClick={() => setResource('1 hour')}>1 hour</button>
                <button onClick={() => setResource('1 week' )}>1 week</button>
            </div>
            <ResourceList resource={ resource }/>
        </div>
    );
}

export default App;