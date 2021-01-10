import React from 'react';
import { Scatter } from 'react-chartjs-2';

export function ScatterChart(props){

    return <div>
        <Scatter 
            data = {{
                datasets: [{
                    showLine: true,
                    label: 'coût en gas',
                    data: props.data
                }],
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
            }}
        
        /> 
    </div>
}