import React from "react";
import Member from "../components/Member";

 export const ProfileWCache = ({ ...props }) => {
  return (
    <>
      <Member
        id={props.id}
        name={props.name}
        image={props.image}
        gender={props.gender}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut
        nulla sem. Aliquam erat volutpat. Vivamus nisi velit, consequat sed nibh
        eu, pretium tempus metus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vestibulum aliquet et risus sit amet egestas. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius eros
        metus, a tempus erat malesuada non. Nunc bibendum ut metus id facilisis.
        Suspendisse potenti. Donec sollicitudin tristique ipsum sed ultrices.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies
        ultrices magna, id ullamcorper erat dictum viverra. Donec malesuada non
        lacus vel tristique. Duis mollis tempus lacus sit amet iaculis. Mauris
        efficitur placerat augue, eget mollis nibh venenatis et. Aliquam rutrum,
        sapien sed interdum sagittis, magna justo semper nisl, sodales tempor
        tortor leo et enim. Donec sollicitudin vehicula erat id bibendum.
        Pellentesque facilisis neque sit amet lectus lacinia, id cursus mauris
        feugiat. Etiam pellentesque bibendum diam quis blandit. Sed a sem at
        massa lobortis sollicitudin vitae eget eros. Integer nunc lectus,
        aliquet viverra fringilla a, tempus id enim.
      </p>
    </>
  );
};
