import { connect, Head } from "frontity";

const HeadMeta = ({state}) => {
        const req = state.source.get(state.router.link);
        const meta = req.data.meta;
        const title = meta.title != '' ? meta.title + ' - ' + meta.site_title : meta.site_title + ' - ' + meta.site_desc;
        return(
                <>
                        <Head>
                                <title>{title}</title>
                                <link rel="shortcut icon" href={meta.favicon} />
                                <link rel="apple-touch-icon" href={meta.favicon} />
                                <meta name="msapplication-TileImage" content={meta.favicon} />
                                <meta name="description" content={meta.desc}/>
                                <meta property="og:title" content={title} />
                                <meta property="og:description" content={meta.desc} />
                                <meta property="og:image" content={meta.thumb} />
                                <meta name="twitter:title" content={title} />
                                <meta name="twitter:description" content={meta.desc} />
                                <meta name="twitter:image" content={meta.thumb} />
                                <meta name="twitter:card" content="summary_large_image" />
                        </Head>
                </>
        )
}

export default connect(HeadMeta);