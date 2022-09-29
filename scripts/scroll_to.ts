
type ScrollToType = any
export const ScrollTo = (element: ScrollToType) => {
    
        console.log('lol 🐷')
        window.scrollTo(
            {
                top: element.current.offsetTop,
                behavior: "smooth"
            }
        )
    
}