import React from 'react'

import { IHeading } from './types'

const Heading: React.FC<IHeading.IProps> = (props) => {
    const { text } = props

    return (
        <div className="title">
            <span className="title__back">{text}</span>
            <span className="title__front">{text}</span>
        </div>
    )
}

export { Heading }
