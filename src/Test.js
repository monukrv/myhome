import { ArrowBackIosSharp } from '@material-ui/icons';
import React, { useState, } from 'react';

import "./test.css"
import { urll } from './variable';



function Test() {
    const [text, updatetext] = useState();

    const [num, snum] = useState(0);

    urll.client.subscribe('ttestt')
    const [namee, updatename] = useState({
        objects: [
            { id: 1, name: false },
            { id: 2, name: false },
            { id: 3, name: false },
            { id: 4, name: false },
            { id: 5, name: true },
            { id: 6, name: false },
            { id: 7, name: false },
            { id: 8, name: false },
            { id: 9, name: false },
            { id: 10, name: true }

        ]
    }
    );



    urll.client.on('message', (topic, data) => {
        console.log("pre")
        Handleupdate(data.toString())
        console.log("post")
    }
    )


    const BoxActive = (index) => {
        if (namee.objects[index].name) return "box active"
        else return "box inactive"
    }

    const Handleclick = (index) => {


        let arrcp = [...namee.objects];
        if (arrcp[index].name) { arrcp[index].name = false }

        else { arrcp[index].name = true }
        updatename({ ...namee, objects: arrcp });

    }
    const Handleupdate = (index) => {


        let arrcp = [...namee.objects];
        if (arrcp[index].name) { arrcp[index].name = false }

        else { arrcp[index].name = true }
        updatename({ ...namee, objects: arrcp });
        snum(num + 1)
    }

    return (
        <>
            <div className='inpt'>
                <input onChange={(e) => updatetext(e.target.value)} />
                <button
                    onClick={() => Handleupdate(text)}

                >
                    change
                </button>
            </div>

            <div className='Test'>
                {
                    namee.objects.map((item, index) => (
                        <div
                            key={index}
                            className={BoxActive(index)}
                            onClick={() => Handleclick(index)}
                        >
                            <h1 className='Test'>{item.id - 1}</h1>
                        </div>

                    ))
                }
            </div>
            <h1>{num}</h1>

        </>
    )
}

export default Test;