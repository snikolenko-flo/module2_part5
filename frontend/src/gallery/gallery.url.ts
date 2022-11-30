export class GalleryUrl {
  getClickedPageNumber(clickedPageNumber: number): number {
    if (clickedPageNumber) {
      return clickedPageNumber;
    }
  }

  addParametersToUrl(pageNumber: number, pageLimit: number, user?: string): void {
    let urlInAddressBar = `./gallery.html?page=${pageNumber}&limit=${pageLimit}`;
    urlInAddressBar = user ? `${urlInAddressBar}&filter=${user}` : urlInAddressBar;

    history.replaceState({}, '', urlInAddressBar);
  }
}
