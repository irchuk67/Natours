import React from "react";
import './grid.scss'

const Grid = () => {
    return(
        <section className={'grid-tester'}>
            <div className={'row'}>
                <div className={'col-1-of-2'}>
                    Column 1 of 2
                </div>
                <div className={'col-1-of-2'}>
                    Column 1 of 2
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-1-of-3'}>
                    Column 1 of 3
                </div>
                <div className={'col-1-of-3'}>
                    Column 1 of 3
                </div>
                <div className={'col-1-of-3'}>
                    Column 1 of 3
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-1-of-3'}>
                    Column 1 of 3
                </div>
                <div className={'col-2-of-3'}>
                    Column 2 of 3
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-1-of-4'}>
                    Column 1 of 4
                </div>
                <div className={'col-1-of-4'}>
                    Column 1 of 4
                </div>
                <div className={'col-1-of-4'}>
                    Column 1 of 4
                </div>
                <div className={'col-1-of-4'}>
                    Column 1 of 4
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-1-of-4'}>
                    Column 1 of 4
                </div>
                <div className={'col-1-of-4'}>
                    Column 1 of 4
                </div>
                <div className={'col-2-of-4'}>
                    Column 2 of 4
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-1-of-4'}>
                    Column 1 of 4
                </div>
                <div className={'col-3-of-4'}>
                    Column 3 of 4
                </div>
            </div>

        </section>
    )
}

export default Grid;