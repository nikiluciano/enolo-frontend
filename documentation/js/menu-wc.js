'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">enolo-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddSuppliersPageModule.html" data-type="entity-link" >AddSuppliersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddSuppliersPageModule-0e4294d2dc2402b471afe77f632ebc85b656e2ecfb8c5ac6b70edd32e2726de89a0a90e6b8280e01ca9348d619d713377e4a858dbebb22a1bc63df44726de0ea"' : 'data-target="#xs-components-links-module-AddSuppliersPageModule-0e4294d2dc2402b471afe77f632ebc85b656e2ecfb8c5ac6b70edd32e2726de89a0a90e6b8280e01ca9348d619d713377e4a858dbebb22a1bc63df44726de0ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddSuppliersPageModule-0e4294d2dc2402b471afe77f632ebc85b656e2ecfb8c5ac6b70edd32e2726de89a0a90e6b8280e01ca9348d619d713377e4a858dbebb22a1bc63df44726de0ea"' :
                                            'id="xs-components-links-module-AddSuppliersPageModule-0e4294d2dc2402b471afe77f632ebc85b656e2ecfb8c5ac6b70edd32e2726de89a0a90e6b8280e01ca9348d619d713377e4a858dbebb22a1bc63df44726de0ea"' }>
                                            <li class="link">
                                                <a href="components/AddSuppliersPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddSuppliersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddSuppliersPageRoutingModule.html" data-type="entity-link" >AddSuppliersPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-70d90dc91b706636b3fefa997c393b473a7192869a7f1b664d440f31c0950a98b4e02fde854c246288be7029e0711b398a725e586b767a68f3e75a34e9ea5605"' : 'data-target="#xs-components-links-module-AppModule-70d90dc91b706636b3fefa997c393b473a7192869a7f1b664d440f31c0950a98b4e02fde854c246288be7029e0711b398a725e586b767a68f3e75a34e9ea5605"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-70d90dc91b706636b3fefa997c393b473a7192869a7f1b664d440f31c0950a98b4e02fde854c246288be7029e0711b398a725e586b767a68f3e75a34e9ea5605"' :
                                            'id="xs-components-links-module-AppModule-70d90dc91b706636b3fefa997c393b473a7192869a7f1b664d440f31c0950a98b4e02fde854c246288be7029e0711b398a725e586b767a68f3e75a34e9ea5605"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DeveloperPageModule.html" data-type="entity-link" >DeveloperPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DeveloperPageModule-74e277a3570f84f99c9db1ce1cf79b21b173a38af77e4bb8ff86e6d7c0b1c8b2c5edfe0dfb0816e724eca6cb45ac536ba88cc85543e88b6f459d5a07e0e18c69"' : 'data-target="#xs-components-links-module-DeveloperPageModule-74e277a3570f84f99c9db1ce1cf79b21b173a38af77e4bb8ff86e6d7c0b1c8b2c5edfe0dfb0816e724eca6cb45ac536ba88cc85543e88b6f459d5a07e0e18c69"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeveloperPageModule-74e277a3570f84f99c9db1ce1cf79b21b173a38af77e4bb8ff86e6d7c0b1c8b2c5edfe0dfb0816e724eca6cb45ac536ba88cc85543e88b6f459d5a07e0e18c69"' :
                                            'id="xs-components-links-module-DeveloperPageModule-74e277a3570f84f99c9db1ce1cf79b21b173a38af77e4bb8ff86e6d7c0b1c8b2c5edfe0dfb0816e724eca6cb45ac536ba88cc85543e88b6f459d5a07e0e18c69"' }>
                                            <li class="link">
                                                <a href="components/DeveloperPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeveloperPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DeveloperPageRoutingModule.html" data-type="entity-link" >DeveloperPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPwPageModule.html" data-type="entity-link" >ForgotPwPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForgotPwPageModule-e0de4b8dec448ea57a124ce9801d1887acdac3182fe236e87e7fa261c9c8a6c5427d136cf1e4b2341229f42d7eea586b335c7dc4a9fc1cf354dd8e6848422543"' : 'data-target="#xs-components-links-module-ForgotPwPageModule-e0de4b8dec448ea57a124ce9801d1887acdac3182fe236e87e7fa261c9c8a6c5427d136cf1e4b2341229f42d7eea586b335c7dc4a9fc1cf354dd8e6848422543"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForgotPwPageModule-e0de4b8dec448ea57a124ce9801d1887acdac3182fe236e87e7fa261c9c8a6c5427d136cf1e4b2341229f42d7eea586b335c7dc4a9fc1cf354dd8e6848422543"' :
                                            'id="xs-components-links-module-ForgotPwPageModule-e0de4b8dec448ea57a124ce9801d1887acdac3182fe236e87e7fa261c9c8a6c5427d136cf1e4b2341229f42d7eea586b335c7dc4a9fc1cf354dd8e6848422543"' }>
                                            <li class="link">
                                                <a href="components/ForgotPwPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPwPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPwPageRoutingModule.html" data-type="entity-link" >ForgotPwPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-f2d77c03698d3b0d18060a10783cb6f5c0e1f94860e289eef9d7eba8438cbc215317e84c027b79e756130e9d9be9440f64d33c5ec23541bcf380edf5806eb33d"' : 'data-target="#xs-components-links-module-HomePageModule-f2d77c03698d3b0d18060a10783cb6f5c0e1f94860e289eef9d7eba8438cbc215317e84c027b79e756130e9d9be9440f64d33c5ec23541bcf380edf5806eb33d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-f2d77c03698d3b0d18060a10783cb6f5c0e1f94860e289eef9d7eba8438cbc215317e84c027b79e756130e9d9be9440f64d33c5ec23541bcf380edf5806eb33d"' :
                                            'id="xs-components-links-module-HomePageModule-f2d77c03698d3b0d18060a10783cb6f5c0e1f94860e289eef9d7eba8438cbc215317e84c027b79e756130e9d9be9440f64d33c5ec23541bcf380edf5806eb33d"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InfoPageModule.html" data-type="entity-link" >InfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InfoPageModule-26e9663fc26e4cda31e71b88062df992a7a020995b7caf57e5289e2198c5f7ce3e3e20b1a170c56be342962da6094c2deb0b7c09f26289454ace16c4a2498ad1"' : 'data-target="#xs-components-links-module-InfoPageModule-26e9663fc26e4cda31e71b88062df992a7a020995b7caf57e5289e2198c5f7ce3e3e20b1a170c56be342962da6094c2deb0b7c09f26289454ace16c4a2498ad1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InfoPageModule-26e9663fc26e4cda31e71b88062df992a7a020995b7caf57e5289e2198c5f7ce3e3e20b1a170c56be342962da6094c2deb0b7c09f26289454ace16c4a2498ad1"' :
                                            'id="xs-components-links-module-InfoPageModule-26e9663fc26e4cda31e71b88062df992a7a020995b7caf57e5289e2198c5f7ce3e3e20b1a170c56be342962da6094c2deb0b7c09f26289454ace16c4a2498ad1"' }>
                                            <li class="link">
                                                <a href="components/InfoPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InfoPageRoutingModule.html" data-type="entity-link" >InfoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InsertConfermentPageModule.html" data-type="entity-link" >InsertConfermentPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InsertConfermentPageModule-9747122338e687b9de3b1793aff8445ffe7085a154ba888cf2d12aec2b1ba5152f55304f3f5f074195fb2fcefbc3723985814d115e51205a5086dbdc8fc62d75"' : 'data-target="#xs-components-links-module-InsertConfermentPageModule-9747122338e687b9de3b1793aff8445ffe7085a154ba888cf2d12aec2b1ba5152f55304f3f5f074195fb2fcefbc3723985814d115e51205a5086dbdc8fc62d75"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InsertConfermentPageModule-9747122338e687b9de3b1793aff8445ffe7085a154ba888cf2d12aec2b1ba5152f55304f3f5f074195fb2fcefbc3723985814d115e51205a5086dbdc8fc62d75"' :
                                            'id="xs-components-links-module-InsertConfermentPageModule-9747122338e687b9de3b1793aff8445ffe7085a154ba888cf2d12aec2b1ba5152f55304f3f5f074195fb2fcefbc3723985814d115e51205a5086dbdc8fc62d75"' }>
                                            <li class="link">
                                                <a href="components/InsertConfermentPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InsertConfermentPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InsertConfermentPageRoutingModule.html" data-type="entity-link" >InsertConfermentPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoadPageModule.html" data-type="entity-link" >LoadPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoadPageModule-1e358a9c118d081571b81efc09a2e33a94943c58df2198580e8d0605306ff26ea91a073d93dc11cf25a1245018f820c298aa175dfd8678383be98d96b7f81942"' : 'data-target="#xs-components-links-module-LoadPageModule-1e358a9c118d081571b81efc09a2e33a94943c58df2198580e8d0605306ff26ea91a073d93dc11cf25a1245018f820c298aa175dfd8678383be98d96b7f81942"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoadPageModule-1e358a9c118d081571b81efc09a2e33a94943c58df2198580e8d0605306ff26ea91a073d93dc11cf25a1245018f820c298aa175dfd8678383be98d96b7f81942"' :
                                            'id="xs-components-links-module-LoadPageModule-1e358a9c118d081571b81efc09a2e33a94943c58df2198580e8d0605306ff26ea91a073d93dc11cf25a1245018f820c298aa175dfd8678383be98d96b7f81942"' }>
                                            <li class="link">
                                                <a href="components/LoadPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoadPageRoutingModule.html" data-type="entity-link" >LoadPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-ed8f9447504d3bb9d7a71ce120073c87d26b0cfd9f8b93082bf3a96c66b693e833017c3c09437aeac79e927b9b58b37fbb7f96701bcb4d5c58ce4979701b6d13"' : 'data-target="#xs-components-links-module-LoginPageModule-ed8f9447504d3bb9d7a71ce120073c87d26b0cfd9f8b93082bf3a96c66b693e833017c3c09437aeac79e927b9b58b37fbb7f96701bcb4d5c58ce4979701b6d13"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-ed8f9447504d3bb9d7a71ce120073c87d26b0cfd9f8b93082bf3a96c66b693e833017c3c09437aeac79e927b9b58b37fbb7f96701bcb4d5c58ce4979701b6d13"' :
                                            'id="xs-components-links-module-LoginPageModule-ed8f9447504d3bb9d7a71ce120073c87d26b0cfd9f8b93082bf3a96c66b693e833017c3c09437aeac79e927b9b58b37fbb7f96701bcb4d5c58ce4979701b6d13"' }>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoConnectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoConnectionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PatchAccountPageModule.html" data-type="entity-link" >PatchAccountPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatchAccountPageModule-1cf953e580fa76f168a966554a4649c2f87286f1adfa79e30c03b5d390c6511cd72e4e7bbfab1e8f3bd1708c66840593e8c3f031be0950d1401b0b407da72376"' : 'data-target="#xs-components-links-module-PatchAccountPageModule-1cf953e580fa76f168a966554a4649c2f87286f1adfa79e30c03b5d390c6511cd72e4e7bbfab1e8f3bd1708c66840593e8c3f031be0950d1401b0b407da72376"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatchAccountPageModule-1cf953e580fa76f168a966554a4649c2f87286f1adfa79e30c03b5d390c6511cd72e4e7bbfab1e8f3bd1708c66840593e8c3f031be0950d1401b0b407da72376"' :
                                            'id="xs-components-links-module-PatchAccountPageModule-1cf953e580fa76f168a966554a4649c2f87286f1adfa79e30c03b5d390c6511cd72e4e7bbfab1e8f3bd1708c66840593e8c3f031be0950d1401b0b407da72376"' }>
                                            <li class="link">
                                                <a href="components/PatchAccountPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatchAccountPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatchAccountPageRoutingModule.html" data-type="entity-link" >PatchAccountPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link" >SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsPageModule-7da049c3edad3476dd49ea7de3ac3a0186c54151033f3892711a6babcf5d2b881199b26d3f32b6e192d3dbbb535c0b88e95192840582d6b300734b00a09bf657"' : 'data-target="#xs-components-links-module-SettingsPageModule-7da049c3edad3476dd49ea7de3ac3a0186c54151033f3892711a6babcf5d2b881199b26d3f32b6e192d3dbbb535c0b88e95192840582d6b300734b00a09bf657"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-7da049c3edad3476dd49ea7de3ac3a0186c54151033f3892711a6babcf5d2b881199b26d3f32b6e192d3dbbb535c0b88e95192840582d6b300734b00a09bf657"' :
                                            'id="xs-components-links-module-SettingsPageModule-7da049c3edad3476dd49ea7de3ac3a0186c54151033f3892711a6babcf5d2b881199b26d3f32b6e192d3dbbb535c0b88e95192840582d6b300734b00a09bf657"' }>
                                            <li class="link">
                                                <a href="components/SettingsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageRoutingModule.html" data-type="entity-link" >SettingsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ShowUserPageModule.html" data-type="entity-link" >ShowUserPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShowUserPageModule-1e3502bfeb098d9910a3e04a3c0867b940df5f1b5a6c772f4a36c8ab09c27aca24cb9c97cd53d70de21f5ef435e098151195ca06135f18f03575bbfd45269364"' : 'data-target="#xs-components-links-module-ShowUserPageModule-1e3502bfeb098d9910a3e04a3c0867b940df5f1b5a6c772f4a36c8ab09c27aca24cb9c97cd53d70de21f5ef435e098151195ca06135f18f03575bbfd45269364"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShowUserPageModule-1e3502bfeb098d9910a3e04a3c0867b940df5f1b5a6c772f4a36c8ab09c27aca24cb9c97cd53d70de21f5ef435e098151195ca06135f18f03575bbfd45269364"' :
                                            'id="xs-components-links-module-ShowUserPageModule-1e3502bfeb098d9910a3e04a3c0867b940df5f1b5a6c772f4a36c8ab09c27aca24cb9c97cd53d70de21f5ef435e098151195ca06135f18f03575bbfd45269364"' }>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowUserPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowUserPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShowUserPageRoutingModule.html" data-type="entity-link" >ShowUserPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignUpPageModule.html" data-type="entity-link" >SignUpPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignUpPageModule-87a5f7caf8d79a2e60fe2b2cdf8d6b5aad1fad24d224264cbefc8c9da819c83459ba766301ee396061c86640ebf3001e63984a354ce65aed52e574c5e584ae46"' : 'data-target="#xs-components-links-module-SignUpPageModule-87a5f7caf8d79a2e60fe2b2cdf8d6b5aad1fad24d224264cbefc8c9da819c83459ba766301ee396061c86640ebf3001e63984a354ce65aed52e574c5e584ae46"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignUpPageModule-87a5f7caf8d79a2e60fe2b2cdf8d6b5aad1fad24d224264cbefc8c9da819c83459ba766301ee396061c86640ebf3001e63984a354ce65aed52e574c5e584ae46"' :
                                            'id="xs-components-links-module-SignUpPageModule-87a5f7caf8d79a2e60fe2b2cdf8d6b5aad1fad24d224264cbefc8c9da819c83459ba766301ee396061c86640ebf3001e63984a354ce65aed52e574c5e584ae46"' }>
                                            <li class="link">
                                                <a href="components/SignUpPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignUpPageRoutingModule.html" data-type="entity-link" >SignUpPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SplashscreenPageModule.html" data-type="entity-link" >SplashscreenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SplashscreenPageModule-5f1613338563dcf4a30dfcc61c0e6cd9c30538a3c25ac3a6d665cc4ba297bc90e8709853d69c65916acdba1ad018c32423bf798de2cbd1c2c98c30e9053318ee"' : 'data-target="#xs-components-links-module-SplashscreenPageModule-5f1613338563dcf4a30dfcc61c0e6cd9c30538a3c25ac3a6d665cc4ba297bc90e8709853d69c65916acdba1ad018c32423bf798de2cbd1c2c98c30e9053318ee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SplashscreenPageModule-5f1613338563dcf4a30dfcc61c0e6cd9c30538a3c25ac3a6d665cc4ba297bc90e8709853d69c65916acdba1ad018c32423bf798de2cbd1c2c98c30e9053318ee"' :
                                            'id="xs-components-links-module-SplashscreenPageModule-5f1613338563dcf4a30dfcc61c0e6cd9c30538a3c25ac3a6d665cc4ba297bc90e8709853d69c65916acdba1ad018c32423bf798de2cbd1c2c98c30e9053318ee"' }>
                                            <li class="link">
                                                <a href="components/SplashscreenPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplashscreenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SplashscreenPageRoutingModule.html" data-type="entity-link" >SplashscreenPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StatisticsPageModule.html" data-type="entity-link" >StatisticsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatisticsPageModule-ca5ac59aa62000931efa71cd1cd0957ada6cfebaa21bb104ba0ae7616492149c29c350ea3ccf6a581c3172af208d00c2e542b3cb3a5de561e2839a97a8d4f895"' : 'data-target="#xs-components-links-module-StatisticsPageModule-ca5ac59aa62000931efa71cd1cd0957ada6cfebaa21bb104ba0ae7616492149c29c350ea3ccf6a581c3172af208d00c2e542b3cb3a5de561e2839a97a8d4f895"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatisticsPageModule-ca5ac59aa62000931efa71cd1cd0957ada6cfebaa21bb104ba0ae7616492149c29c350ea3ccf6a581c3172af208d00c2e542b3cb3a5de561e2839a97a8d4f895"' :
                                            'id="xs-components-links-module-StatisticsPageModule-ca5ac59aa62000931efa71cd1cd0957ada6cfebaa21bb104ba0ae7616492149c29c350ea3ccf6a581c3172af208d00c2e542b3cb3a5de561e2839a97a8d4f895"' }>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatisticsPageRoutingModule.html" data-type="entity-link" >StatisticsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SuppliersPageModule.html" data-type="entity-link" >SuppliersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SuppliersPageModule-e4df1e85ff120e26af34b13c1c7e5a08fa6d5171a829c3d375aa3fbe2ce5e29e93826396eb34ccab57dd0c3f314d4c1a21f1f0182fdafe579405c8de1aee475e"' : 'data-target="#xs-components-links-module-SuppliersPageModule-e4df1e85ff120e26af34b13c1c7e5a08fa6d5171a829c3d375aa3fbe2ce5e29e93826396eb34ccab57dd0c3f314d4c1a21f1f0182fdafe579405c8de1aee475e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SuppliersPageModule-e4df1e85ff120e26af34b13c1c7e5a08fa6d5171a829c3d375aa3fbe2ce5e29e93826396eb34ccab57dd0c3f314d4c1a21f1f0182fdafe579405c8de1aee475e"' :
                                            'id="xs-components-links-module-SuppliersPageModule-e4df1e85ff120e26af34b13c1c7e5a08fa6d5171a829c3d375aa3fbe2ce5e29e93826396eb34ccab57dd0c3f314d4c1a21f1f0182fdafe579405c8de1aee475e"' }>
                                            <li class="link">
                                                <a href="components/SuppliersPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuppliersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SuppliersPageRoutingModule.html" data-type="entity-link" >SuppliersPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserAccountPageModule.html" data-type="entity-link" >UserAccountPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserAccountPageModule-d999e15da95a3e90413441ccb0d1e20909864fdcab25da94cacb8e9b7dc17758b3769eb1711b7d9e5ff9ac318fce2bd8ab7c9acbb3749bee495b3232a7840493"' : 'data-target="#xs-components-links-module-UserAccountPageModule-d999e15da95a3e90413441ccb0d1e20909864fdcab25da94cacb8e9b7dc17758b3769eb1711b7d9e5ff9ac318fce2bd8ab7c9acbb3749bee495b3232a7840493"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserAccountPageModule-d999e15da95a3e90413441ccb0d1e20909864fdcab25da94cacb8e9b7dc17758b3769eb1711b7d9e5ff9ac318fce2bd8ab7c9acbb3749bee495b3232a7840493"' :
                                            'id="xs-components-links-module-UserAccountPageModule-d999e15da95a3e90413441ccb0d1e20909864fdcab25da94cacb8e9b7dc17758b3769eb1711b7d9e5ff9ac318fce2bd8ab7c9acbb3749bee495b3232a7840493"' }>
                                            <li class="link">
                                                <a href="components/UserAccountPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserAccountPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserAccountPageRoutingModule.html" data-type="entity-link" >UserAccountPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewConfermentPageModule.html" data-type="entity-link" >ViewConfermentPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewConfermentPageModule-09f0b2cf33789a951c594d2c8b9a6221faf0900e32075e466fee114c5266ec5f481384e48478d492ffdba95bfecf56a14dea83e27ba280d9758e479d0153c6ae"' : 'data-target="#xs-components-links-module-ViewConfermentPageModule-09f0b2cf33789a951c594d2c8b9a6221faf0900e32075e466fee114c5266ec5f481384e48478d492ffdba95bfecf56a14dea83e27ba280d9758e479d0153c6ae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewConfermentPageModule-09f0b2cf33789a951c594d2c8b9a6221faf0900e32075e466fee114c5266ec5f481384e48478d492ffdba95bfecf56a14dea83e27ba280d9758e479d0153c6ae"' :
                                            'id="xs-components-links-module-ViewConfermentPageModule-09f0b2cf33789a951c594d2c8b9a6221faf0900e32075e466fee114c5266ec5f481384e48478d492ffdba95bfecf56a14dea83e27ba280d9758e479d0153c6ae"' }>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewConfermentPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewConfermentPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewConfermentPageRoutingModule.html" data-type="entity-link" >ViewConfermentPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WarehousePageModule.html" data-type="entity-link" >WarehousePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WarehousePageModule-52b5b4bd89c2472696b4fc0a03f6d9eade197c8e94ad8727330db80d97d113df8e662fd56e9593022de3ba8dfde5acdaf1d942e5421848f923ac6b597c78eb02"' : 'data-target="#xs-components-links-module-WarehousePageModule-52b5b4bd89c2472696b4fc0a03f6d9eade197c8e94ad8727330db80d97d113df8e662fd56e9593022de3ba8dfde5acdaf1d942e5421848f923ac6b597c78eb02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WarehousePageModule-52b5b4bd89c2472696b4fc0a03f6d9eade197c8e94ad8727330db80d97d113df8e662fd56e9593022de3ba8dfde5acdaf1d942e5421848f923ac6b597c78eb02"' :
                                            'id="xs-components-links-module-WarehousePageModule-52b5b4bd89c2472696b4fc0a03f6d9eade197c8e94ad8727330db80d97d113df8e662fd56e9593022de3ba8dfde5acdaf1d942e5421848f923ac6b597c78eb02"' }>
                                            <li class="link">
                                                <a href="components/WarehousePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WarehousePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WarehousePageRoutingModule.html" data-type="entity-link" >WarehousePageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfermentService.html" data-type="entity-link" >ConfermentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountryProvider.html" data-type="entity-link" >CountryProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsService.html" data-type="entity-link" >StatisticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SupplierService.html" data-type="entity-link" >SupplierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService.html" data-type="entity-link" >ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UiService.html" data-type="entity-link" >UiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/User.html" data-type="entity-link" >User</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WarehouseService.html" data-type="entity-link" >WarehouseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WineService.html" data-type="entity-link" >WineService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});