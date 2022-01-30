import React, { useMemo, useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";
import './App.css';
import chart from "./chart";


function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await axios("http://127.0.0.1:5000/get_data");
            setData(result.data["data"]);
            console.log(result.data["data"])
        })();
    }, []);

    const columns = useMemo(
        () => [
            {
                id: 'expander',
                Header: () => (
                <span>
                </span>
                ),
                Cell: ({ row}) =>
                    <span
                        {...row.getToggleRowExpandedProps({
                            style: {
                                paddingLeft: `${row.depth * 2}rem`,
                            },
                        })}
                    >
                        {row.isExpanded ? '-' : '+'}
                    </span>
            },
            {
                Header: "Genes associated with lung carcinoma",
                columns: [
                    {
                        Header: "Approved Symbol",
                        Cell: ({ row }) => <a href={"https://platform.opentargets.org/target/" + row.original.target.id}>{row.original.target.gene_info.symbol}</a>,

                    },
                    {
                        Header: "Gene Name",
                        accessor: "target.gene_info.name"
                    },
                    {
                        Header: "Overall Association Score",
                        accessor: "association_score.overall"
                    }
                ]
            }
        ],
        []
    );

    return (
        // <><br/>
            <div className="App">
                <br/>
                <Table columns={columns} data={data} renderRowSubComponent={chart} />
            </div>
        // </>
    );
}

export default App;
