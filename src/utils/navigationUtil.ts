import { StackActions } from "@react-navigation/native";

import { navigationRef } from "App";


export const navigate = (name: string, params?: Object) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate((name as any, params as any) as never);
    }
};

export const replace = (name: string, params?: any) => {
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