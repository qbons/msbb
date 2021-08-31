const MSBBAPI = (props) => {
        return [
                {
                        // HOMEPAGE
                        pattern: "/",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/msbb-api/v1/homepage`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHomepage: true });
                        }
                }, 
                {
                        // THEME OPTION
                        pattern: "option",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/msbb-api/v1/option`
                                });
                                state.theme.options = await response.json();
                        }
                }, 
                {
                        // THEME NAVGATION
                        pattern: "navigation",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/msbb-api/v1/navigation`
                                });
                                state.theme.navigation = await response.json();
                        }
                }, 
                {
                        // PAGE
                        pattern: "/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/msbb-api/v1/page/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option,[option.data.marker]: true });
                        }
                }, 

                {
                        // PRODUCT CATEGORY
                        pattern: "/product/category/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/msbb-api/v1/product-category/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isProductCat: true });
                        }
                }, 
                {
                        // PRODUCT BRAND
                        pattern: "/product/brand/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/msbb-api/v1/product-brand/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isProductBrand: true });
                        }
                }, 
        ];
}

export default MSBBAPI;