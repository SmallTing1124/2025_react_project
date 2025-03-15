const formatTimeAgo = (time) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(time)) / 1000);

    let result;

    if (diffInSeconds < 60) {
        result = `${diffInSeconds}秒前`;
    } else {
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            result = `${diffInMinutes}分鐘前`;
        } else {
            const diffInHours = Math.floor(diffInMinutes / 60);
            if (diffInHours < 24) {
                result = `${diffInHours}小時前`;
            } else {
                const diffInDays = Math.floor(diffInHours / 24);
                if (diffInDays < 30) {
                    result = `${diffInDays}天前`;
                } else {
                    const diffInMonths = Math.floor(diffInDays / 30);
                    if (diffInMonths < 12) {
                        result = `${diffInMonths}個月前`;
                    } else {
                        const diffInYears = Math.floor(diffInMonths / 12);
                        result = `${diffInYears}年前`;
                    }
                }
            }
        }
    }
    // 更新 state.time
    return result;
}

export default formatTimeAgo;