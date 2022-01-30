import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList} from 'recharts';

export default function Chart(data){

    let arr = [];
    Object.entries(data.original.association_score.datatypes).forEach(x => {
        arr.push({
            'name': x[0],
            'val': x[1]
        })
    });

    return (
            <BarChart
                    width={600}
                    height={500}
                    data={arr}

                    margin={{
                        top: 25,
                        right: 50,
                        left: 30,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='name'
                           angle={-45}
                           height={150}
                           interval={0}
                           textAnchor="end"
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="val" fill="#8884d8">
                    </Bar>

                </BarChart>
        );
}