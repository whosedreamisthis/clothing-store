import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        return <CategoryItem key={id} url={imageUrl} title={title} />;
      })}
    </div>
  );
};

export default Directory;
//     ;
//   });
//   }
//   </div>
//   );
// }

// ;
