// import styled from 'styled-components'
// import tw from 'tailwind-styled-components'
import tw from "twin.macro";

const Container = tw.div`flex flex-col justify-center items-center`;

const MenuContainer = tw.div`w-9/12 mt-12 mx-auto relative h-screen`;

const AdminContainer = tw.div`absolute left-[15%] top-[72px] right-0 bottom-0`;
const AdminTitle = tw.div`font-bold text-4xl`;

export { Container, MenuContainer, AdminContainer, AdminTitle };
