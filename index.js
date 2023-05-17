import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';
import { SampleBase } from './sample-base';
export class Default extends SampleBase {
  render() {
    return (
      <div>
        <div className="control-section">
          {/* Render the PDF Viewer */}
          <PdfViewerComponent
            id="container"
            documentPath="FormFillingDocument.pdf"
            downloadEnd={this.downloadEnd}
            serviceUrl="http://localhost:5000/pdfviewer"
            style={{ height: '640px' }}
          >
            <Inject
              services={[
                Toolbar,
                Magnification,
                Navigation,
                LinkAnnotation,
                BookmarkView,
                ThumbnailView,
                Print,
                TextSelection,
                TextSearch,
                Annotation,
                FormFields,
                FormDesigner,
              ]}
            />
          </PdfViewerComponent>
        </div>
      </div>
    );
  }
  downloadEnd(args) {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.load(args.downloadDocument);
  }
}

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
