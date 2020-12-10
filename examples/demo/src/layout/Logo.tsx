import * as React from 'react';
import { SVGProps } from 'react';
import { useTheme } from '@material-ui/core/styles';

const Logo = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
        <svg
            width={234.532}
            height={20.475}
            viewBox="0 0 62.053 5.417"
            {...props}
        >
            Quickbooks Online
        </svg>
    );
};

export default Logo;
