import { WritableAtom, Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import React from 'react';

const HydrateAtoms = ({
    initialValues,
    children,
}: {
    initialValues: Array<readonly [WritableAtom<any, any, any>, unknown]>;
    children: React.JSX.Element | React.JSX.Element[];
}) => {
    useHydrateAtoms(initialValues);

    if (Array.isArray(children)) {
        return <>{children}</>;
    }

    return children;
};

export const JotaiHydrateProvider = ({
    initialValues,
    children,
}: {
    initialValues: Array<readonly [WritableAtom<any, any, any>, unknown]>;
    children: React.JSX.Element | React.JSX.Element[];
}) => {
    return (
        <Provider>
            <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
        </Provider>
    );
};
