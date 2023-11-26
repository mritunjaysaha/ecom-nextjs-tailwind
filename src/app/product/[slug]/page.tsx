export default function ProductDetailsPage({
    params,
}: {
    params: { slug: string };
}) {
    return <main>Product Details {JSON.stringify(params)}</main>;
}
