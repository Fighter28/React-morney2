import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
    console.log(error);
}
type Props = {
    name?: string,
    fill: string
}
const Icon = (props: Props, fill: Props) => {
    return (
        <svg className="icon" fill={props.fill}>
            {props.name && <use xlinkHref={'#' + props.name}/>}
        </svg>
    );
};
export default Icon;