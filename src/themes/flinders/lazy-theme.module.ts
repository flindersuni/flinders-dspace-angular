import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRegistriesModule} from '../../app/admin/admin-registries/admin-registries.module';
import {AdminSearchModule} from '../../app/admin/admin-search-page/admin-search.module';
import {
  AdminWorkflowModuleModule
} from '../../app/admin/admin-workflow-page/admin-workflow.module';
import {
  BitstreamFormatsModule
} from '../../app/admin/admin-registries/bitstream-formats/bitstream-formats.module';
import {BrowseByModule} from '../../app/browse-by/browse-by.module';
import {
  CollectionFormModule
} from '../../app/collection-page/collection-form/collection-form.module';
import {CommunityFormModule} from '../../app/community-page/community-form/community-form.module';
import {CoreModule} from '../../app/core/core.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {EditItemPageModule} from '../../app/item-page/edit-item-page/edit-item-page.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {IdlePreloadModule} from 'angular-idle-preload';
import {
  JournalEntitiesModule
} from '../../app/entity-groups/journal-entities/journal-entities.module';
import {MyDspaceSearchModule} from '../../app/my-dspace-page/my-dspace-search.module';
import {MenuModule} from '../../app/shared/menu/menu.module';
import {NavbarModule} from '../../app/navbar/navbar.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProfilePageModule} from '../../app/profile-page/profile-page.module';
import {
  ResearchEntitiesModule
} from '../../app/entity-groups/research-entities/research-entities.module';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {SearchPageModule} from '../../app/search-page/search-page.module';
import {SharedModule} from '../../app/shared/shared.module';
import {StatisticsModule} from '../../app/statistics/statistics.module';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {TranslateModule} from '@ngx-translate/core';
import {HomePageModule} from '../../app/home-page/home-page.module';
import {AppModule} from '../../app/app.module';
import {ItemPageModule} from '../../app/item-page/item-page.module';
import {RouterModule} from '@angular/router';
import {CommunityListPageModule} from '../../app/community-list-page/community-list-page.module';
import {InfoModule} from '../../app/info/info.module';
import {StatisticsPageModule} from '../../app/statistics-page/statistics-page.module';
import {CommunityPageModule} from '../../app/community-page/community-page.module';
import {CollectionPageModule} from '../../app/collection-page/collection-page.module';
import {SubmissionModule} from '../../app/submission/submission.module';
import {MyDSpacePageModule} from '../../app/my-dspace-page/my-dspace-page.module';
import {SearchModule} from '../../app/shared/search/search.module';
import {
  ResourcePoliciesModule
} from '../../app/shared/resource-policies/resource-policies.module';
import {ComcolModule} from '../../app/shared/comcol/comcol.module';
import {RootModule} from '../../app/root.module';
import {BrowseByPageModule} from '../../app/browse-by/browse-by-page.module';
import {ResultsBackButtonModule} from '../../app/shared/results-back-button/results-back-button.module';
import {SharedBrowseByModule} from '../../app/shared/browse-by/shared-browse-by.module';
import {ItemVersionsModule} from '../../app/item-page/versions/item-versions.module';
import {ItemSharedModule} from 'src/app/item-page/item-shared.module';
import {FlindersBrowseBySwitcherComponent} from "./app/browse-by/browse-by-switcher/browse-by-switcher.component";
import {FlindersBreadcrumbsComponent} from "./app/breadcrumbs/breadcrumbs.component";
import {FlindersCollectionPageComponent} from "./app/collection-page/collection-page.component";
import {FlindersCommunityListComponent} from "./app/community-list-page/community-list/community-list.component";
import {FlindersCommunityListPageComponent} from "./app/community-list-page/community-list-page.component";
import {FlindersCommunityPageComponent} from "./app/community-page/community-page.component";
import {FlindersFooterComponent} from "./app/footer/footer.component";
import {FlindersForbiddenComponent} from "./app/forbidden/forbidden.component";
import {FlindersForgotEmailComponent} from "./app/forgot-password/forgot-password-email/forgot-email.component";
import {
  FlindersForgotPasswordFormComponent
} from "./app/forgot-password/forgot-password-form/forgot-password-form.component";
import {FlindersHomePageComponent} from "./app/home-page/home-page.component";
import {
  FlindersTopLevelCommunityListComponent
} from "./app/home-page/top-level-community-list/top-level-community-list.component";
import {FlindersFeedbackComponent} from "./app/info/feedback/feedback.component";
import {FlindersPrivacyComponent} from "./app/info/privacy/privacy.component";
import {FlindersPrivacyContentComponent} from "./app/info/privacy/privacy-content/privacy-content.component";
import {FlindersPublicationComponent} from "./app/item-page/simple/item-types/publication/publication.component";
import {
  FlindersFileSectionComponent
} from "./app/item-page/simple/field-components/file-section/file-section.component";
import {FlindersFullItemPageComponent} from "./app/item-page/full/full-item-page.component";
import {FlindersItemPageComponent} from "./app/item-page/simple/item-page.component";
import {FlindersLoginPageComponent} from "./app/login-page/login-page.component";
import {FlindersLogoutPageComponent} from "./app/logout-page/logout-page.component";
import {FlindersObjectNotFoundComponent} from "./app/lookup-by-id/objectnotfound/objectnotfound.component";
import {FlindersMyDSpacePageComponent} from "./app/my-dspace-page/my-dspace-page.component";
import {FlindersPageNotFoundComponent} from "./app/pagenotfound/pagenotfound.component";
import {FlindersProfilePageComponent} from "./app/profile-page/profile-page.component";
import {FlindersRootComponent} from "./app/root/root.component";
import {FlindersSearchPageComponent} from "./app/search-page/search-page.component";
import {FlindersConfigurationSearchPageComponent} from "./app/search-page/configuration-search-page.component";
import {
  FlindersCollectionStatisticsPageComponent
} from "./app/statistics-page/collection-statistics-page/collection-statistics-page.component";
import {
  FlindersItemStatisticsPageComponent
} from "./app/statistics-page/item-statistics-page/item-statistics-page.component";
import {
  FlindersSiteStatisticsPageComponent
} from "./app/statistics-page/site-statistics-page/site-statistics-page.component";
import {FlindersSubmissionSubmitComponent} from "./app/submission/submit/submission-submit.component";
import {
  FlindersSubmissionImportExternalComponent
} from "./app/submission/import-external/submission-import-external.component";
import {FlindersSubmissionEditComponent} from "./app/submission/edit/submission-edit.component";
import {
  FlindersWorkflowItemDeleteComponent
} from "./app/workflowitems-edit-page/workflow-item-delete/workflow-item-delete.component";
import {
  FlindersWorkflowItemSendBackComponent
} from "./app/workflowitems-edit-page/workflow-item-send-back/workflow-item-send-back.component";
import {SystemWideAlertModule} from "../../app/system-wide-alert/system-wide-alert.module";
import {DsoPageModule} from "../../app/shared/dso-page/dso-page.module";
import {FlindersRegisterEmailFormComponent} from "./app/register-email-form/register-email-form.component";
import {FlindersRegisterEmailComponent} from "./app/register-page/register-email/register-email.component";
import {
  FlindersCommunityStatisticsPageComponent
} from "./app/statistics-page/community-statistics-page/community-statistics-page.component";
import {FlindersEndUserAgreementComponent} from "./app/info/end-user-agreement/end-user-agreement.component";
import {
  FlindersEndUserAgreementContentComponent
} from "./app/info/end-user-agreement/end-user-agreement-content/end-user-agreement-content.component";
import {FlindersHomeNewsComponent} from "./app/home-page/home-news/home-news.component";
import {FlindersLogInComponent} from "./app/shared/log-in/log-in.component";

const DECLARATIONS = [
  FlindersBrowseBySwitcherComponent,
  FlindersBreadcrumbsComponent,
  FlindersCollectionPageComponent,
  FlindersCommunityListComponent,
  FlindersCommunityListPageComponent,
  FlindersCommunityPageComponent,
  FlindersFooterComponent,
  FlindersForbiddenComponent,
  FlindersForgotEmailComponent,
  FlindersForgotPasswordFormComponent,
  FlindersTopLevelCommunityListComponent,
  FlindersFeedbackComponent,
  FlindersPrivacyComponent,
  FlindersPrivacyContentComponent,
  FlindersPublicationComponent,
  FlindersFileSectionComponent,
  FlindersFullItemPageComponent,
  FlindersItemPageComponent,
  FlindersLoginPageComponent,
  FlindersLogoutPageComponent,
  FlindersObjectNotFoundComponent,
  FlindersMyDSpacePageComponent,
  FlindersPageNotFoundComponent,
  FlindersProfilePageComponent,
  FlindersRootComponent,
  FlindersSearchPageComponent,
  FlindersConfigurationSearchPageComponent,
  FlindersCollectionStatisticsPageComponent,
  FlindersCollectionPageComponent,
  FlindersItemStatisticsPageComponent,
  FlindersSiteStatisticsPageComponent,
  FlindersSubmissionSubmitComponent,
  FlindersSubmissionImportExternalComponent,
  FlindersSubmissionEditComponent,
  FlindersWorkflowItemDeleteComponent,
  FlindersWorkflowItemSendBackComponent,
  FlindersRegisterEmailFormComponent,
  FlindersRegisterEmailFormComponent,
  FlindersRegisterEmailComponent,
  FlindersCommunityStatisticsPageComponent,
  FlindersEndUserAgreementComponent,
  FlindersEndUserAgreementContentComponent,
  FlindersHomeNewsComponent,
  FlindersHomePageComponent,
  FlindersLogInComponent
];

@NgModule({
  imports: [
    AdminRegistriesModule,
    AdminSearchModule,
    AdminWorkflowModuleModule,
    AppModule,
    RootModule,
    BitstreamFormatsModule,
    BrowseByModule,
    BrowseByPageModule,
    ResultsBackButtonModule,
    CollectionFormModule,
    CollectionPageModule,
    CommonModule,
    CommunityFormModule,
    CommunityListPageModule,
    CommunityPageModule,
    CoreModule,
    DragDropModule,
    ItemSharedModule,
    ItemPageModule,
    EditItemPageModule,
    ItemVersionsModule,
    FormsModule,
    HomePageModule,
    HttpClientModule,
    IdlePreloadModule,
    InfoModule,
    JournalEntitiesModule,
    MenuModule,
    MyDspaceSearchModule,
    NavbarModule,
    NgbModule,
    ProfilePageModule,
    ResearchEntitiesModule,
    RouterModule,
    ScrollToModule,
    SearchPageModule,
    SharedModule,
    SharedBrowseByModule,
    StatisticsModule,
    StatisticsPageModule,
    StoreModule,
    StoreRouterConnectingModule,
    TranslateModule,
    SubmissionModule,
    MyDSpacePageModule,
    MyDspaceSearchModule,
    SearchModule,
    FormsModule,
    ResourcePoliciesModule,
    ComcolModule,
    SystemWideAlertModule,
    DsoPageModule,
  ],
  declarations: DECLARATIONS,
})

  /**
   * This module serves as an index for all the components in this theme.
   * It should import all other modules, so the compiler knows where to find any components referenced
   * from a component in this theme
   * It is purposefully not exported, it should never be imported anywhere else, its only purpose is
   * to give lazily loaded components a context in which they can be compiled successfully
   */
class FlindersLazyThemeModule {
}
