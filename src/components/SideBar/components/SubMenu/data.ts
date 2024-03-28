import { PATH_SCREEN } from "@/constants";
import { navigate } from "@/utils";

export const subMenu = [
    {
        label: 'Đánh giá',
        onPress: () => navigate(PATH_SCREEN.FEEDBACK_SCREEN),
    },
    {
        label: 'Câu hỏi thường gặp',
        onPress: () => navigate(PATH_SCREEN.FAQS_SCREEN),
    },
    {
        label: 'Điều khoản & điều kiện',
        onPress: () => navigate(PATH_SCREEN.TERM_AND_CONDITIONS_SCREEN),
    },
    {
        label: 'Chính sách quyền riêng tư',
        onPress: () => navigate(PATH_SCREEN.PRIVACY_POLICY_SCREEN),
    },
    {
        label: 'Thông tin dinh dưỡng',
        onPress: () => navigate(PATH_SCREEN.NUTRITION_INFORMATION_SCREEN),
    },
];
