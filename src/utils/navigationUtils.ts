import { StackActions, createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

type GetParams = {
    [key: string]: any;
};

export const navigate = (name: string, params?: Object) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name as any, params as any);
    }
};

export const replace = (name: string, params?: Object) => {
    if (navigationRef.isReady()) {
        navigationRef.current?.dispatch(StackActions.replace(name, params));
    }
};

export const goBack = () => {
    if (navigationRef.isReady()) {
        navigationRef.goBack();
    }
};

export const getCurrentRoute = async () => {
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            if (navigationRef.isReady()) {
                clearInterval(interval);
                resolve(navigationRef.getCurrentRoute());
            }
        }, 500);
    });
};

export const getParams = (): GetParams => {
    let currentParams = {};
    if (navigationRef.isReady()) {
        currentParams = navigationRef.getCurrentRoute()?.params as any;
    }

    return currentParams;
};
