type UserComment = {
    author: {
      firstName: string;
      lastName: string;
    };
    authorId: number;
    rant: string;
    stars: number;
    commentId: string
  };
  
  type ButtonProps = {
    children: React.ReactNode;
  };