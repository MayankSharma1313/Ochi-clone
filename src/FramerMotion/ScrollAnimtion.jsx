import React from "react";
import {
  useScroll,
  motion,
  transform,
  useSpring,
  useTransform,
} from "framer-motion";

const ScrollAnimtion = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    ["red", "orange", "yellow", "green"]
  );

  return (
    <>
      <motion.div
        className="w-full h-2 sticky top-0"
        style={{
          background: background,
          transformOrigin: "left",
          scaleX: scaleX,
        }}
      ></motion.div>
      <div className="w-full p-16 text-justify">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          veniam nesciunt quia, iste, suscipit, vitae facilis inventore expedita
          sunt reiciendis iure molestias mollitia ea quisquam porro debitis
          dignissimos saepe maiores nobis accusamus. Pariatur libero odio magni,
          quo labore earum esse nisi quaerat quidem praesentium accusamus
          dignissimos laborum velit consequuntur itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          veniam nesciunt quia, iste, suscipit, vitae facilis inventore expedita
          sunt reiciendis iure molestias mollitia ea quisquam porro debitis
          dignissimos saepe maiores nobis accusamus. Pariatur libero odio magni,
          quo labore earum esse nisi quaerat quidem praesentium accusamus
          dignissimos laborum velit consequuntur itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          veniam nesciunt quia, iste, suscipit, vitae facilis inventore expedita
          sunt reiciendis iure molestias mollitia ea quisquam porro debitis
          dignissimos saepe maiores nobis accusamus. Pariatur libero odio magni,
          quo labore earum esse nisi quaerat quidem praesentium accusamus
          dignissimos laborum velit consequuntur itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          veniam nesciunt quia, iste, suscipit, vitae facilis inventore expedita
          sunt reiciendis iure molestias mollitia ea quisquam porro debitis
          dignissimos saepe maiores nobis accusamus. Pariatur libero odio magni,
          quo labore earum esse nisi quaerat quidem praesentium accusamus
          dignissimos laborum velit consequuntur itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          veniam nesciunt quia, iste, suscipit, vitae facilis inventore expedita
          sunt reiciendis iure molestias mollitia ea quisquam porro debitis
          dignissimos saepe maiores nobis accusamus. Pariatur libero odio magni,
          quo labore earum esse nisi quaerat quidem praesentium accusamus
          dignissimos laborum velit consequuntur itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          veniam nesciunt quia, iste, suscipit, vitae facilis inventore expedita
          sunt reiciendis iure molestias mollitia ea quisquam porro debitis
          dignissimos saepe maiores nobis accusamus. Pariatur libero odio magni,
          quo labore earum esse nisi quaerat quidem praesentium accusamus
          dignissimos laborum velit consequuntur itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          veniam nesciunt quia, iste, suscipit, vitae facilis inventore expedita
          sunt reiciendis iure molestias mollitia ea quisquam porro debitis
          dignissimos saepe maiores nobis accusamus. Pariatur libero odio magni,
          quo labore earum esse nisi quaerat quidem praesentium accusamus
          dignissimos laborum velit consequuntur itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          veniam nesciunt quia, iste, suscipit, vitae facilis inventore expedita
          sunt reiciendis iure molestias mollitia ea quisquam porro debitis
          dignissimos saepe maiores nobis accusamus. Pariatur libero odio magni,
          quo labore earum esse nisi quaerat quidem praesentium accusamus
          dignissimos laborum velit consequuntur itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          veniam nesciunt quia, iste, suscipit, vitae facilis inventore expedita
          sunt reiciendis iure molestias mollitia ea quisquam porro debitis
          dignissimos saepe maiores nobis accusamus. Pariatur libero odio magni,
          quo labore earum esse nisi quaerat quidem praesentium accusamus
          dignissimos laborum velit consequuntur itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          voluptates nemo accusantium? Nostrum fugit voluptas dignissimos,
          suscipit maxime eveniet explicabo aut debitis totam, quo veniam,
          possimus exercitationem assumenda. Quod saepe ipsum voluptates
          similique voluptas consequuntur labore. Voluptatum dolore provident
          nisi quod aliquid fugit ad facere tempore praesentium ab commodi,
          excepturi, veniam esse ipsa eveniet nostrum cumque quidem eum? Quam
          est debitis sequi modi! Eveniet, iste perferendis? Alias, adipisci
          mollitia facere nobis cum quo debitis nihil totam ducimus, doloribus
          molestiae, rem est earum qui. Beatae error consequuntur aut impedit
          corrupti doloribus laudantium laboriosam dignissimos, repellat
          aperiam! Rerum autem rem beatae necessitatibus ut dolor, cumque
          laboriosam vel tenetur quaerat, commodi a, velit expedita nostrum
          maxime atque provident accusamus itaque libero sapiente incidunt
          asperiores placeat aperiam! Alias commodi voluptatum dolores, nesciunt
          sapiente, non nobis debitis soluta consequuntur eligendi tempore
          consectetur, vel obcaecati praesentium dolor similique autem
          exercitationem qui odit accusantium aperiam vitae unde optio. Eos a
          similique, iure, magnam mollitia nam ullam harum, cumque officiis
          maiores dolores ratione esse voluptatum. Quia sapiente nobis commodi
          totam fugiat vitae blanditiis voluptatem distinctio dolorum corporis,
          nulla dicta maxime porro molestiae, omnis quidem quae ipsam error
          provident enim nesciunt. Quod saepe distinctio laborum possimus
          soluta, eius repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          voluptates nemo accusantium? Nostrum fugit voluptas dignissimos,
          suscipit maxime eveniet explicabo aut debitis totam, quo veniam,
          possimus exercitationem assumenda. Quod saepe ipsum voluptates
          similique voluptas consequuntur labore. Voluptatum dolore provident
          nisi quod aliquid fugit ad facere tempore praesentium ab commodi,
          excepturi, veniam esse ipsa eveniet nostrum cumque quidem eum? Quam
          est debitis sequi modi! Eveniet, iste perferendis? Alias, adipisci
          mollitia facere nobis cum quo debitis nihil totam ducimus, doloribus
          molestiae, rem est earum qui. Beatae error consequuntur aut impedit
          corrupti doloribus laudantium laboriosam dignissimos, repellat
          aperiam! Rerum autem rem beatae necessitatibus ut dolor, cumque
          laboriosam vel tenetur quaerat, commodi a, velit expedita nostrum
          maxime atque provident accusamus itaque libero sapiente incidunt
          asperiores placeat aperiam! Alias commodi voluptatum dolores, nesciunt
          sapiente, non nobis debitis soluta consequuntur eligendi tempore
          consectetur, vel obcaecati praesentium dolor similique autem
          exercitationem qui odit accusantium aperiam vitae unde optio. Eos a
          similique, iure, magnam mollitia nam ullam harum, cumque officiis
          maiores dolores ratione esse voluptatum. Quia sapiente nobis commodi
          totam fugiat vitae blanditiis voluptatem distinctio dolorum corporis,
          nulla dicta maxime porro molestiae, omnis quidem quae ipsam error
          provident enim nesciunt. Quod saepe distinctio laborum possimus
          soluta, eius repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          voluptates nemo accusantium? Nostrum fugit voluptas dignissimos,
          suscipit maxime eveniet explicabo aut debitis totam, quo veniam,
          possimus exercitationem assumenda. Quod saepe ipsum voluptates
          similique voluptas consequuntur labore. Voluptatum dolore provident
          nisi quod aliquid fugit ad facere tempore praesentium ab commodi,
          excepturi, veniam esse ipsa eveniet nostrum cumque quidem eum? Quam
          est debitis sequi modi! Eveniet, iste perferendis? Alias, adipisci
          mollitia facere nobis cum quo debitis nihil totam ducimus, doloribus
          molestiae, rem est earum qui. Beatae error consequuntur aut impedit
          corrupti doloribus laudantium laboriosam dignissimos, repellat
          aperiam! Rerum autem rem beatae necessitatibus ut dolor, cumque
          laboriosam vel tenetur quaerat, commodi a, velit expedita nostrum
          maxime atque provident accusamus itaque libero sapiente incidunt
          asperiores placeat aperiam! Alias commodi voluptatum dolores, nesciunt
          sapiente, non nobis debitis soluta consequuntur eligendi tempore
          consectetur, vel obcaecati praesentium dolor similique autem
          exercitationem qui odit accusantium aperiam vitae unde optio. Eos a
          similique, iure, magnam mollitia nam ullam harum, cumque officiis
          maiores dolores ratione esse voluptatum. Quia sapiente nobis commodi
          totam fugiat vitae blanditiis voluptatem distinctio dolorum corporis,
          nulla dicta maxime porro molestiae, omnis quidem quae ipsam error
          provident enim nesciunt. Quod saepe distinctio laborum possimus
          soluta, eius repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          voluptates nemo accusantium? Nostrum fugit voluptas dignissimos,
          suscipit maxime eveniet explicabo aut debitis totam, quo veniam,
          possimus exercitationem assumenda. Quod saepe ipsum voluptates
          similique voluptas consequuntur labore. Voluptatum dolore provident
          nisi quod aliquid fugit ad facere tempore praesentium ab commodi,
          excepturi, veniam esse ipsa eveniet nostrum cumque quidem eum? Quam
          est debitis sequi modi! Eveniet, iste perferendis? Alias, adipisci
          mollitia facere nobis cum quo debitis nihil totam ducimus, doloribus
          molestiae, rem est earum qui. Beatae error consequuntur aut impedit
          corrupti doloribus laudantium laboriosam dignissimos, repellat
          aperiam! Rerum autem rem beatae necessitatibus ut dolor, cumque
          laboriosam vel tenetur quaerat, commodi a, velit expedita nostrum
          maxime atque provident accusamus itaque libero sapiente incidunt
          asperiores placeat aperiam! Alias commodi voluptatum dolores, nesciunt
          sapiente, non nobis debitis soluta consequuntur eligendi tempore
          consectetur, vel obcaecati praesentium dolor similique autem
          exercitationem qui odit accusantium aperiam vitae unde optio. Eos a
          similique, iure, magnam mollitia nam ullam harum, cumque officiis
          maiores dolores ratione esse voluptatum. Quia sapiente nobis commodi
          totam fugiat vitae blanditiis voluptatem distinctio dolorum corporis,
          nulla dicta maxime porro molestiae, omnis quidem quae ipsam error
          provident enim nesciunt. Quod saepe distinctio laborum possimus
          soluta, eius repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          voluptates nemo accusantium? Nostrum fugit voluptas dignissimos,
          suscipit maxime eveniet explicabo aut debitis totam, quo veniam,
          possimus exercitationem assumenda. Quod saepe ipsum voluptates
          similique voluptas consequuntur labore. Voluptatum dolore provident
          nisi quod aliquid fugit ad facere tempore praesentium ab commodi,
          excepturi, veniam esse ipsa eveniet nostrum cumque quidem eum? Quam
          est debitis sequi modi! Eveniet, iste perferendis? Alias, adipisci
          mollitia facere nobis cum quo debitis nihil totam ducimus, doloribus
          molestiae, rem est earum qui. Beatae error consequuntur aut impedit
          corrupti doloribus laudantium laboriosam dignissimos, repellat
          aperiam! Rerum autem rem beatae necessitatibus ut dolor, cumque
          laboriosam vel tenetur quaerat, commodi a, velit expedita nostrum
          maxime atque provident accusamus itaque libero sapiente incidunt
          asperiores placeat aperiam! Alias commodi voluptatum dolores, nesciunt
          sapiente, non nobis debitis soluta consequuntur eligendi tempore
          consectetur, vel obcaecati praesentium dolor similique autem
          exercitationem qui odit accusantium aperiam vitae unde optio. Eos a
          similique, iure, magnam mollitia nam ullam harum, cumque officiis
          maiores dolores ratione esse voluptatum. Quia sapiente nobis commodi
          totam fugiat vitae blanditiis voluptatem distinctio dolorum corporis,
          nulla dicta maxime porro molestiae, omnis quidem quae ipsam error
          provident enim nesciunt. Quod saepe distinctio laborum possimus
          soluta, eius repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          voluptates nemo accusantium? Nostrum fugit voluptas dignissimos,
          suscipit maxime eveniet explicabo aut debitis totam, quo veniam,
          possimus exercitationem assumenda. Quod saepe ipsum voluptates
          similique voluptas consequuntur labore. Voluptatum dolore provident
          nisi quod aliquid fugit ad facere tempore praesentium ab commodi,
          excepturi, veniam esse ipsa eveniet nostrum cumque quidem eum? Quam
          est debitis sequi modi! Eveniet, iste perferendis? Alias, adipisci
          mollitia facere nobis cum quo debitis nihil totam ducimus, doloribus
          molestiae, rem est earum qui. Beatae error consequuntur aut impedit
          corrupti doloribus laudantium laboriosam dignissimos, repellat
          aperiam! Rerum autem rem beatae necessitatibus ut dolor, cumque
          laboriosam vel tenetur quaerat, commodi a, velit expedita nostrum
          maxime atque provident accusamus itaque libero sapiente incidunt
          asperiores placeat aperiam! Alias commodi voluptatum dolores, nesciunt
          sapiente, non nobis debitis soluta consequuntur eligendi tempore
          consectetur, vel obcaecati praesentium dolor similique autem
          exercitationem qui odit accusantium aperiam vitae unde optio. Eos a
          similique, iure, magnam mollitia nam ullam harum, cumque officiis
          maiores dolores ratione esse voluptatum. Quia sapiente nobis commodi
          totam fugiat vitae blanditiis voluptatem distinctio dolorum corporis,
          nulla dicta maxime porro molestiae, omnis quidem quae ipsam error
          provident enim nesciunt. Quod saepe distinctio laborum possimus
          soluta, eius repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          voluptates nemo accusantium? Nostrum fugit voluptas dignissimos,
          suscipit maxime eveniet explicabo aut debitis totam, quo veniam,
          possimus exercitationem assumenda. Quod saepe ipsum voluptates
          similique voluptas consequuntur labore. Voluptatum dolore provident
          nisi quod aliquid fugit ad facere tempore praesentium ab commodi,
          excepturi, veniam esse ipsa eveniet nostrum cumque quidem eum? Quam
          est debitis sequi modi! Eveniet, iste perferendis? Alias, adipisci
          mollitia facere nobis cum quo debitis nihil totam ducimus, doloribus
          molestiae, rem est earum qui. Beatae error consequuntur aut impedit
          corrupti doloribus laudantium laboriosam dignissimos, repellat
          aperiam! Rerum autem rem beatae necessitatibus ut dolor, cumque
          laboriosam vel tenetur quaerat, commodi a, velit expedita nostrum
          maxime atque provident accusamus itaque libero sapiente incidunt
          asperiores placeat aperiam! Alias commodi voluptatum dolores, nesciunt
          sapiente, non nobis debitis soluta consequuntur eligendi tempore
          consectetur, vel obcaecati praesentium dolor similique autem
          exercitationem qui odit accusantium aperiam vitae unde optio. Eos a
          similique, iure, magnam mollitia nam ullam harum, cumque officiis
          maiores dolores ratione esse voluptatum. Quia sapiente nobis commodi
          totam fugiat vitae blanditiis voluptatem distinctio dolorum corporis,
          nulla dicta maxime porro molestiae, omnis quidem quae ipsam error
          provident enim nesciunt. Quod saepe distinctio laborum possimus
          soluta, eius repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          voluptates nemo accusantium? Nostrum fugit voluptas dignissimos,
          suscipit maxime eveniet explicabo aut debitis totam, quo veniam,
          possimus exercitationem assumenda. Quod saepe ipsum voluptates
          similique voluptas consequuntur labore. Voluptatum dolore provident
          nisi quod aliquid fugit ad facere tempore praesentium ab commodi,
          excepturi, veniam esse ipsa eveniet nostrum cumque quidem eum? Quam
          est debitis sequi modi! Eveniet, iste perferendis? Alias, adipisci
          mollitia facere nobis cum quo debitis nihil totam ducimus, doloribus
          molestiae, rem est earum qui. Beatae error consequuntur aut impedit
          corrupti doloribus laudantium laboriosam dignissimos, repellat
          aperiam! Rerum autem rem beatae necessitatibus ut dolor, cumque
          laboriosam vel tenetur quaerat, commodi a, velit expedita nostrum
          maxime atque provident accusamus itaque libero sapiente incidunt
          asperiores placeat aperiam! Alias commodi voluptatum dolores, nesciunt
          sapiente, non nobis debitis soluta consequuntur eligendi tempore
          consectetur, vel obcaecati praesentium dolor similique autem
          exercitationem qui odit accusantium aperiam vitae unde optio. Eos a
          similique, iure, magnam mollitia nam ullam harum, cumque officiis
          maiores dolores ratione esse voluptatum. Quia sapiente nobis commodi
          totam fugiat vitae blanditiis voluptatem distinctio dolorum corporis,
          nulla dicta maxime porro molestiae, omnis quidem quae ipsam error
          provident enim nesciunt. Quod saepe distinctio laborum possimus
          soluta, eius repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          voluptates nemo accusantium? Nostrum fugit voluptas dignissimos,
          suscipit maxime eveniet explicabo aut debitis totam, quo veniam,
          possimus exercitationem assumenda. Quod saepe ipsum voluptates
          similique voluptas consequuntur labore. Voluptatum dolore provident
          nisi quod aliquid fugit ad facere tempore praesentium ab commodi,
          excepturi, veniam esse ipsa eveniet nostrum cumque quidem eum? Quam
          est debitis sequi modi! Eveniet, iste perferendis? Alias, adipisci
          mollitia facere nobis cum quo debitis nihil totam ducimus, doloribus
          molestiae, rem est earum qui. Beatae error consequuntur aut impedit
          corrupti doloribus laudantium laboriosam dignissimos, repellat
          aperiam! Rerum autem rem beatae necessitatibus ut dolor, cumque
          laboriosam vel tenetur quaerat, commodi a, velit expedita nostrum
          maxime atque provident accusamus itaque libero sapiente incidunt
          asperiores placeat aperiam! Alias commodi voluptatum dolores, nesciunt
          sapiente, non nobis debitis soluta consequuntur eligendi tempore
          consectetur, vel obcaecati praesentium dolor similique autem
          exercitationem qui odit accusantium aperiam vitae unde optio. Eos a
          similique, iure, magnam mollitia nam ullam harum, cumque officiis
          maiores dolores ratione esse voluptatum. Quia sapiente nobis commodi
          totam fugiat vitae blanditiis voluptatem distinctio dolorum corporis,
          nulla dicta maxime porro molestiae, omnis quidem quae ipsam error
          provident enim nesciunt. Quod saepe distinctio laborum possimus
          soluta, eius repellat?
        </p>
      </div>
    </>
  );
};

export default ScrollAnimtion;
