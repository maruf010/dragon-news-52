import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
    } = news;

    const formattedDate = new Date(news.author.published_date).toLocaleDateString();

    return (
        <div className="card bg-base-100 shadow-xl border border-gray-300 my-4">
            {/* Author Section */}
            <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold">{author?.name}</h2>
                        <p className="text-sm text-gray-500">
                            {formattedDate}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="text-gray-400 cursor-pointer"><CiBookmark size={20}/></button>
                    <button className="text-gray-400 cursor-pointer"><CiShare2 size={20}/></button>
                </div>
            </div>

            {/* Thumbnail */}
            <figure className="px-4 pt-4">
                <img src={thumbnail_url} alt="news" className="rounded-xl w-full h-56 object-cover" />
            </figure>

            {/* Content */}
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-700">
                    {details.length > 200 ? details.slice(0, 200) + "..." : details}
                </p>
                <a href="#" className="text-orange-500 font-semibold mt-2">Read More</a>

                {/* Footer */}
                <div className="card-actions justify-between items-center mt-4 border-t pt-4">
                    <div className="flex items-center gap-2 text-orange-400">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < rating.number ? "text-orange-400" : "text-gray-300"} />
                        ))}
                        <span className="ml-1 text-gray-700 font-medium">{rating.number}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaRegEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
