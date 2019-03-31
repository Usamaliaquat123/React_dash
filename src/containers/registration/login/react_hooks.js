import React, { useState, useEffect } from 'react';


function ReactHooks (props){
    const [name, newName] = useState('Mary')
 
    function onchangeEventHandler(e){
        newName(e.target.value)
    }

    useEffect(() => {
        document.title = name
    })
    return (
        <div>
            <section>
                <input 
                    value={name}
                    onChange={onchangeEventHandler}
                />
            </section>
            

        </div>
    );

}

export default ReactHooks;
