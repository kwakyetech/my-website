import React, { useState } from 'react';
import { Button, Card, Modal, LoadingSpinner, Badge } from '../components/ui';

const ComponentShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">UI Components Showcase</h1>
          <p className="text-xl text-gray-600">Testing all reusable UI components</p>
        </div>

        {/* Button Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Button Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <Card.Header>
                <Card.Title>Button Variants</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="space-y-3">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </div>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>Button Sizes</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="space-y-3">
                  <Button size="sm">Small Button</Button>
                  <Button size="md">Medium Button</Button>
                  <Button size="lg">Large Button</Button>
                </div>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>Button States</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="space-y-3">
                  <Button disabled>Disabled Button</Button>
                  <Button loading={loading} onClick={handleLoadingTest}>
                    {loading ? 'Loading...' : 'Test Loading'}
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </div>
        </section>

        {/* Card Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Card Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="default">
              <Card.Header>
                <Card.Title>Default Card</Card.Title>
              </Card.Header>
              <Card.Content>
                This is a default card with standard styling and hover effects.
              </Card.Content>
              <Card.Footer>
                <Button size="sm">Action</Button>
              </Card.Footer>
            </Card>

            <Card variant="dark">
              <Card.Header>
                <Card.Title>Dark Card</Card.Title>
              </Card.Header>
              <Card.Content>
                This is a dark variant card with white text on dark background.
              </Card.Content>
            </Card>

            <Card 
              variant="gradient" 
              onClick={() => alert('Card clicked!')}
              className="cursor-pointer"
            >
              <Card.Header>
                <Card.Title>Clickable Card</Card.Title>
              </Card.Header>
              <Card.Content>
                This card is clickable and has a gradient background.
              </Card.Content>
            </Card>
          </div>
        </section>

        {/* Badge Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Badge Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <Card.Header>
                <Card.Title>Badge Variants</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>Interactive Badges</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="flex flex-wrap gap-2">
                  <Badge 
                    variant="primary" 
                    removable 
                    onRemove={() => alert('Badge removed!')}
                  >
                    Removable
                  </Badge>
                  <Badge 
                    variant="success" 
                    onClick={() => alert('Badge clicked!')}
                  >
                    Clickable
                  </Badge>
                  <Badge.Dot variant="warning">With Dot</Badge.Dot>
                </div>
              </Card.Content>
            </Card>
          </div>
        </section>

        {/* Loading Spinner Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Loading Spinner Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Card.Header>
                <Card.Title>Default Spinner</Card.Title>
              </Card.Header>
              <Card.Content className="text-center py-8">
                <LoadingSpinner size="lg" text="Loading..." />
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>Dots Spinner</Card.Title>
              </Card.Header>
              <Card.Content className="text-center py-8">
                <LoadingSpinner.Dots size="lg" variant="primary" />
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <Card.Title>Pulse Spinner</Card.Title>
              </Card.Header>
              <Card.Content className="text-center py-8">
                <LoadingSpinner.Pulse size="md" variant="success" />
              </Card.Content>
            </Card>
          </div>
        </section>

        {/* Modal Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modal Component</h2>
          <Card>
            <Card.Header>
              <Card.Title>Modal Demo</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="mb-4">Click the button below to test the modal component:</p>
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            </Card.Content>
          </Card>
        </section>

        {/* Technology Tags Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Tags Example</h2>
          <Card>
            <Card.Header>
              <Card.Title>Project Technologies</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">React</Badge>
                <Badge variant="success">Node.js</Badge>
                <Badge variant="info">TypeScript</Badge>
                <Badge variant="warning">JavaScript</Badge>
                <Badge variant="danger">MongoDB</Badge>
                <Badge variant="default">Express</Badge>
                <Badge variant="primary">Tailwind CSS</Badge>
                <Badge variant="success">Vite</Badge>
              </div>
            </Card.Content>
          </Card>
        </section>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>Example Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-gray-600 mb-4">
            This is an example modal component with proper accessibility features:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Focus management</li>
            <li>Escape key handling</li>
            <li>Backdrop click to close</li>
            <li>ARIA attributes for screen readers</li>
            <li>Body scroll prevention</li>
          </ul>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Modal Features:</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary" size="sm">Accessible</Badge>
              <Badge variant="success" size="sm">Responsive</Badge>
              <Badge variant="info" size="sm">Customizable</Badge>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ComponentShowcase;