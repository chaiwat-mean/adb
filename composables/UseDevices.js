import shellExec from 'shell-exec'

export async function useGetReviews(){
    const { data : reviews, pending : pending_reviews, error : error_reviews } = await useLazyFetch('https://api.termiknow.com/reviews',
        { initialCache: false }
    )

    return {reviews, pending_reviews, error_reviews};
}
export async function useGetADB(){
    const output = await shellExec('adb devices')
    return output.stdout
    
}