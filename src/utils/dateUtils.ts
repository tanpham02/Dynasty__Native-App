import moment from 'moment';

export const DATE_FORMAT_DDMMYYYY = 'DD/MM/YYYY';
export const DATE_FORMAT_DDMMYYYYTHHMMSS = "YYYY-MM-DD'T'HH:mm:ss";
export const DATE_FORMAT_DDMMYYYYTHHMMSS_DAY_FILTER = 'YYYY-MM-DDTHH:mm:ss';
export const DATE_FORMAT_DDMMYYYYTHHMM = 'DD/MM/YYYY HH:mm';
export const DATE_FORMAT_HHMMDDMMYYYY = 'HH:mm DD/MM/YYYY';

export const formatDate = (date: Date | string, format: string): string => {
    return moment(date).format(format);
};
