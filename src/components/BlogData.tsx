import IBlog from "../interface";
export const genBlogId = (): string => Math.random().toString(36).slice(-6);

export const BlogData: IBlog[] = [
  {
    id: genBlogId(),
    title: " Lorem ipsum dolor sit amet.",
    cover:
      "https://cdn.pixabay.com/photo/2022/08/17/12/05/herd-of-sheep-7392366_1280.jpg",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quia harum quam modi aliquid, temporibus aspernatur voluptate nisi error voluptas sint delectus. Id sit non perspiciatis laudantium neque numquam ducimus Quod ipsam doloremque id illo voluptatibus voluptate. Nobis eos obcaecati quod veritatis aliquid odit quam rem consequatur delectus, accusamus dolor voluptatum ad quisquam impedit ducimus quia. Ipsam dolore tenetur numquam? Numquam, inventore tenetur voluptas neque fugiat placeat esse dolor! Vero tempora voluptatibus cumque ipsam quidem! Dignissimos aliquam optio, sed odit consequatur omnis quisquam, cum nesciunt vel incidunt asperiores deleniti quam.Corporis id, doloremque nobis voluptatibus debitis aliquam ad, voluptas inventore veniam quidem, porro velit tempore eum assumenda minima harum. Architecto atque explicabo odit ullam? Optio blanditiis assumenda officiis repellendus provident?Tempore quidem, voluptatum et nesciunt ut recusandae maiores perspiciatis odio ea excepturi atque perferendis eos. Ipsum similique eligendi ratione at maxime, excepturi reprehenderit dolorum ducimus sequi consequuntur! Ipsam, voluptas autem. Cum incidunt voluptatem architecto eum rerum nostrum quam beatae odio distinctio non! Veniam quas quae, earum officiis asperiores, possimus, voluptatem magni nostrum dolore voluptate qui tenetur vel a velit doloribus! Asperiores architecto optio non voluptatem ipsa mollitia iste quibusdam nisi, ut cupiditate. Et ipsum, incidunt repellat ratione, enim recusandae, modi saepe neque hic voluptatem temporibus vero. Assumenda, modi. Labore, maiores.",
    description:
      "This is a comprehensive tutorial on how to build a REST backend with Typescript and Node.js",
    dateCreated: new Date(Date.now()).toString().substr(4, 11),
    createdBy: "John Doe",
  },

  {
    id: genBlogId(),
    title: " Lorem ipsum dolor sit amet.",
    cover:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse nesciunt ab nulla facere adipisci magnam quos provident! Nam, dolor aut sunt ab expedita minus quae repellendus iure fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates, obcaecati quod officiis a fuga, alias laborum quisquam eius, ullam et iure corporis assumenda dolores porro! Molestiae, magnam fuga! Voluptatum?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos consectetur excepturi numquam sequi itaque laboriosam ut incidunt sunt rerum possimus.",
    dateCreated: new Date(Date.now()).toString().substr(4, 11),
    createdBy: "Jaime Reimer",
  },
  {
    id: genBlogId(),
    title: " Lorem ipsum dolor sit amet.",
    cover:
      "https://cdn.pixabay.com/photo/2021/11/04/05/33/abu-dhabi-mosque-6767422_1280.jpg",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse nesciunt ab nulla facere adipisci magnam quos provident! Nam, dolor aut sunt ab expedita minus quae repellendus iure fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates, obcaecati quod officiis a fuga, alias laborum quisquam eius, ullam et iure corporis assumenda dolores porro! Molestiae, magnam fuga! Voluptatum?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos consectetur excepturi numquam sequi itaque laboriosam ut incidunt sunt rerum possimus.",
    dateCreated: new Date(Date.now()).toString().substr(4, 11),
    createdBy: "Jaime Reimer",
  },
  {
    id: genBlogId(),
    title: " Lorem ipsum dolor sit amet.",
    cover:
      "https://cdn.pixabay.com/photo/2022/07/09/17/42/dog-7311407_1280.jpg",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse nesciunt ab nulla facere adipisci magnam quos provident! Nam, dolor aut sunt ab expedita minus quae repellendus iure fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates, obcaecati quod officiis a fuga, alias laborum quisquam eius, ullam et iure corporis assumenda dolores porro! Molestiae, magnam fuga! Voluptatum?",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos consectetur excepturi numquam sequi itaque laboriosam ut incidunt sunt rerum possimus.",
    dateCreated: new Date(Date.now()).toString().substr(4, 11),
    createdBy: "Jaime Reimer",
  },
  {
    id: genBlogId(),
    title: " Lorem ipsum dolor sit amet.",
    cover:
      "https://cdn.pixabay.com/photo/2022/07/31/10/11/swan-7355432_960_720.jpg",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse nesciunt ab nulla facere adipisci magnam quos provident! Nam, dolor aut sunt ab expedita minus quae repellendus iure fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates, obcaecati quod officiis a fuga, alias laborum quisquam eius, ullam et iure corporis assumenda dolores porro! Molestiae, magnam fuga! Voluptatum?",
    description:
      "This is a comprehensive tutorial on how to build a REST backend with Typescript and Node.js",
    dateCreated: new Date(Date.now()).toString().substr(4, 11),
    createdBy: "John Doe",
  },
];
