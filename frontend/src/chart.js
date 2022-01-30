import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
                    width={500}
                    height={300}
                    data={arr}

                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='val' fill="#8884d8" />
                    {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                </BarChart>
        );
}