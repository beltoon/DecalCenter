function contentInRandomOrder( {content} ) {
        content.reverse().forEach((item, index) => {
            const j = Math.floor(Math.random() * (index + 1));
            [content[index], content[j]] = [content[j], content[index]];
        });
        return content;
    };


export default contentInRandomOrder;