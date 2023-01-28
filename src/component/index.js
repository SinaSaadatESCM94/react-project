// the aim of this file is to import all the components in here and then export them from here. With this approach there will be no need to import each component in an individuale line. all requiered components in a page could be imported in a single line.
import ApiTest from "./apiTest/ApiTest";
import Button from "./button/Button";
import ContentTable from "./ContentTable/ContentTable";
import Input from "./input/Input";
import LoadingButton from "./loading/LoadingButton";
import Logo from "./logo/Logo";
import MenuIcon from "./menu-icon/menuIcon";
export { ApiTest, Button, ContentTable, Input, LoadingButton, Logo, MenuIcon };
export * from "./specific";
