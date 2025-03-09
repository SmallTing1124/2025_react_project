import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function ProtectedRoute({ children, allowedRoles = [] }) {
    const isAuth = useSelector((state) => state?.auth?.isAuth);
    const userRole = useSelector((state) => state?.auth?.user?.role || "guest");
    // console.log('頁面允許的角色:', allowedRoles);
    // console.log('使用者目前的:', userRole);

    // 如果是 guest 且沒有登入，則導向登入頁面
    if (!isAuth && allowedRoles.includes("guest")) {
        return <Navigate to="/auth/login" replace />;
    }

    // 若使用者角色不在允許的角色中，則導向首頁
    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return children;
};