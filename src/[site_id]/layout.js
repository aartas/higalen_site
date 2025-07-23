export default async function siteLayout(params,children,) {

    console.log('params?.site_id', params?.site_id)

    return (
        <html lang="en">
            <body>
                {children}
                I am here to test the page
            </body>
        </html>
    )
}