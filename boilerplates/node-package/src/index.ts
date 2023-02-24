export default function sayHello(name?: string) {
  console.info(name ? `Hello ${name}!` : 'Hello World!');
}
