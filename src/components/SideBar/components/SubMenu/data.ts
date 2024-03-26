import { PathName } from "@/constants";
import { navigate } from "@/utils";

const {
    FEEDBACK_SCREEN,
    FAQS_SCREEN,
    TERM_AND_CONDITIONS_SCREEN,
    PRIVACY_POLICY_SCREEN,
    NUTRITION_INFORMATION_SCREEN
} = PathName.PATH_SCREEN

export const subMenu = [
    {
        label: 'Đánh giá',
        onPress: () => navigate(FEEDBACK_SCREEN),
    },
    {
        label: 'Câu hỏi thường gặp',
        onPress: () => navigate(FAQS_SCREEN),
    },
    {
        label: 'Điều khoản & điều kiện',
        onPress: () => navigate(TERM_AND_CONDITIONS_SCREEN),
    },
    {
        label: 'Chính sách quyền riêng tư',
        onPress: () => navigate(PRIVACY_POLICY_SCREEN),
    },
    {
        label: 'Thông tin dinh dưỡng',
        onPress: () => navigate(NUTRITION_INFORMATION_SCREEN),
    },
];
