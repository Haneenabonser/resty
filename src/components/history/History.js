import React from 'react';

function History(props) {
    return (
        <div>
            <h3>Methods List :</h3>
            {props.history.map((item, idx) => {
                return (
                    <ul>
                        <span className={item.method} key={idx}>
                            {item.method.toUpperCase()} : {item.url}
                        </span>
                    </ul>
                );
            })}
        </div>
    );
}
export default History;