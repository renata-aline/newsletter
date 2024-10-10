/* eslint-disable react/prop-types */
const Article = ({title, text, tags}) => {
    return(
        <div className="newsletter-card" > 
            <h3 className="text-xl text-blue-200 dark:text-gray-200 font-bold">{title}</h3>
            <div className="grid gap-1">
                {
                text.map((content, index) => <p key={index} className="text-blue-200 dark:text-gray-400 line-clamp-2 sm:line-clamp-none">{content}</p>)
                }

            <div className="sm:flex-row justify-end gap-2 pr-5 hidden sm:flex">
                {
                tags.map (tag => <span key={tag} className="bg-blue-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 text-xs font-bold uppercase hover:bg-blue-200 hover:scale-110">{tag}</span>)
                }
            </div>    
            </div>
        </div>
    )
}

export default Article