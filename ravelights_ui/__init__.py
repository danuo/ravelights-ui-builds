from importlib import resources

__all__ = ["get_frontend_files"]

def get_frontend_files():
    """Return Traversable pointing at the frontend directory (for resource iteration)."""
    return resources.files(__name__).joinpath("frontend")
